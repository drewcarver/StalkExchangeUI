module type FUNCTOR = {
  type t('a);
  let map: ('a => 'b, t('a)) => t('b);
};

module FunctorExtensions = (F: FUNCTOR) => {
  let (<$>) = F.map;

  let (<#>) = (fa, f) => F.map(f, fa);
};

module Option = {
  type t('a) = option('a);

  let map = (f, option) => switch(option) {
    | Some(a) => Some(f(a))
    | None => None
  };

  module Functor: FUNCTOR with type t('a) = t('a) = {
    type nonrec t('a) = t('a); 
    let map = map; 
  };

  module FunctorExt = FunctorExtensions(Functor);

  include FunctorExt;
};

module Promise = {
  type t('a) = Js.Promise.t('a);

  let map = (f: 'a => 'b, promiseA: Js.Promise.t('a)): Js.Promise.t('b) =>
    promiseA |> Js.Promise.then_(a => Js.Promise.resolve(f(a)));
  
  module Functor: FUNCTOR with type t('a) = t('a) = {
    type nonrec t('a) = t('a);
    let map = map;
  };
  module FunctorExt = FunctorExtensions(Functor);

  include FunctorExt;
};

module Result = {
  type t('a, 'e) = | Ok('a) | Error('e);

  let map = (f, fa) => switch(fa) {
    | Ok(a) => Ok(f(a));
    | Error(e) => Error(e);
  };
};

let rec even = x =>
  if (x <= 0) {
    true;
  } else {
    odd(x - 1);
  }
and odd = x =>
  if (x <= 0) {
    false;
  } else {
    even(x - 1);
  };

let half = x =>
  if (even(x)) {
    Some(x / 2);
  } else {
    None;
  };