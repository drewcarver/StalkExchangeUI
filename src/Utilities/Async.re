type error = 
    | ServerError
    | Unauthorized
    | NotFound;

type async('a) = 
    | Loading
    | Loaded('a)
    | Error(error);
