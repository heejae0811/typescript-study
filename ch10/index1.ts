interface IValuable<T> {
  getOrElse(defaultValue: T)
}

interface IFunctor<T> {
  map<U>(fn: (value: T) => U)
}

type nullable = undefined | null

class Some<T> implements IValuable<T>, IFunctor<T> {
  constructor(private value: T) {}

  getOrElse(defaultValue: T) {
    return this.value ?? defaultValue
  }

  map<U>(fn: (T) => U) {
    return new Some<U>(fn(this.value))
  }
}

class None implements IValuable<nullable>, IFunctor<nullable> {
  getOrElse<T>(defaultValue: T | nullable) {
    return defaultValue
  }

  map<U>(fn: (T) => U) {
    return new None
  }
}

const parseNumber = (n: string): IFunctor<number> & IValuable<number> => {
  const value = parseInt(n);
  return isNaN(value) ? Option.None : Option.Some(value);
}