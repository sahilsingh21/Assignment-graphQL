import {nanoid} from 'nanoid'

class Specifications {
    constructor(id, {
        ARAI_Mileage, Engine_Displacement, Max_Torque, TransmissionType, Fuel_Tank_Capacity, Fuel_Type, Max_Power, Seating_Capacity, Boot_Space, Body_Type, features
    }){
        this.id = id
        this.ARAI_Mileage = ARAI_Mileage
        this.Engine_Displacement = Engine_Displacement
        this.Max_Torque = Max_Torque
        this.TransmissionType = TransmissionType
        this.Fuel_Tank_Capacity = Fuel_Tank_Capacity
        this.Fuel_Type = Fuel_Type
        this.Max_Power = Max_Power
        this.Seating_Capacity = Seating_Capacity
        this.Boot_Space = Boot_Space
        this.Body_Type = Body_Type
        this.features = features;
    }
}
const specificationsholder = {}

const resolvers = {
    getSpecifications : ({ id }) => {
        return new Specifications(id, specificationsholder)
    },
    createSpecifications: ({ input }) => {
        let id = nanoid()
        specificationsholder[id] = input
        return new Specifications(id, input)
    }
}

export default resolvers;