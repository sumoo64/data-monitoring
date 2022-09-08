type TypeTime = Partial<{
  year: string
  day: string
  week: string
  [key: string]: any
}>

type TypeNode = Partial<{
  name: string
  equipments: TypeEquipment[]
  id: string
}>
type TypeEquipment = Partial<{
  name: string
  id: string
}>

export type {TypeTime, TypeNode, TypeEquipment}
