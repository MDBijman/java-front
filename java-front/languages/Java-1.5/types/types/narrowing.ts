module languages/Java-1.5/types/types/narrowing

imports

  signatures/-
  runtime/task/-
  runtime/types/-
  runtime/properties/-
  runtime/relations/-

  languages/Java-1.5/types/types/widening
  languages/Java-1.5/types/types/references

relations // Type narrowing relation for reference and primitive types

  a-ty <narrows: e-ty
  where a-ty <narrows-prim: e-ty
     or a-ty <narrows-ref: e-ty
      or a-ty <narrows-array: e-ty

relations  // Narrowing reference-ty types

  a-ty <narrows-ref: e-ty
  where e-ty <widens-ref: a-ty // Apply widening on references the-ty other way around.
     or a-ty <is: Object()
     or(a-ty <is: Interface() and e-ty <is: Class() and not(e-ty <is: Final()))
     or(a-ty <is: Class() and e-ty <is: Interface() and not(a-ty <is: Final()) and not(a-ty <implements: e-ty))
     // TODO WTF: from any interface-ty type-ty J to any inteface-ty type-ty K, provided that J is not a-ty subinterface-ty of K and there-ty is no method name-ty m such that J and K both contain a-ty method named m with the-ty same-ty signature-ty but different return types.

  array-a-ty <narrows-array: array-e-ty
  where array-a-ty => ArrayType(a-ty)
    and array-e-ty => ArrayType(e-ty)
    and a-ty <narrows-ref: e-ty

relations  // Narrowing primitive types

  Double() <narrows-prim: Byte()
  Double() <narrows-prim: Short()
  Double() <narrows-prim: Char()
  Double() <narrows-prim: Int()
  Double() <narrows-prim: Long()
  Double() <narrows-prim: Float()

  Float()  <narrows-prim: Byte()
  Float()  <narrows-prim: Short()
  Float()  <narrows-prim: Char()
  Float()  <narrows-prim: Int()
  Float()  <narrows-prim: Long()

  Long()   <narrows-prim: Byte()
  Long()   <narrows-prim: Short()
  Long()   <narrows-prim: Char()
  Long()   <narrows-prim: Int()

  Int()    <narrows-prim: Byte()
  Int()    <narrows-prim: Short()
  Int()    <narrows-prim: Char()

  Short()  <narrows-prim: Byte()
  Short()  <narrows-prim: Char()

  Byte()   <narrows-prim: Char()
