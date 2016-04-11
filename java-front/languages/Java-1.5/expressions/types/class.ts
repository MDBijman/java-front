module languages/Java-1.5/expressions/types/class

imports

  signatures/-
  runtime/task/-
  runtime/types/-
  runtime/properties/-
  runtime/relations/-

  languages/Java-1.5/expressions/trans/desugar
  languages/Java-1.5/types/types/references

type rules // Class instantiation

  NewInstance(_, _, t, _, None()) : ty
  where t : ty

  NewInstance(_, c, _, _, ClassBody(_)) : RefType(TypeName(c), None())

  QNewInstance(_, _, _, c, _, _, None()) : ty
  where definition of c : ty

  QNewInstance(_, _, _, c, _, _, ClassBody(_)) : RefType(TypeName(c), None())

type rules // Instanceof

  InstanceOf(e, t) : Boolean()
  where e : e-ty
    and t : t-ty
    and e-ty <is: Reference() else error "Expected reference" on e
    and t-ty <is: Reference() else error "Expected reference" on t

type rules // Field access

  Field(_, f) : ty
  where definition of f : ty

  Field(_, f) : ty
  where definition of f : ty

  QSuperField(_, f) : ty
  where definition of f : ty

type rules // This

  QThis(ty) : ty
