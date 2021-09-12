import {buildSchema} from 'graphql'

const schema = buildSchema(`
    type Specifications {
        id: ID
        ARAI_Mileage: String
        Engine_Displacement: Int
        Max_Torque: String
        TransmissionType: String
        Fuel_Tank_Capacity: Int
        Fuel_Type: String
        Max_Power: String
        Seating_Capacity: Int
        Boot_Space: Int
        Body_Type: String
        features: [Features]
    }

    type Features{
        Power_Steering: Boolean
        Anti_Lock_Braking_System: Boolean
        Driver_Airbag: Boolean
        Passenger_Airbag: Boolean
        Automatic_Climate_Control: Boolean
        Alloy_Wheels: Boolean
        Multi_function_Steering_Wheel: Boolean
        Power_Windows_Front: Boolean
        Air_Conditioner: Boolean
    }

    type Query {
        getSpecifications(id: ID): Specifications
    }

    input SpecificationsInput{
        id: ID
        ARAI_Mileage: String
        Engine_Displacement: Int
        Max_Torque: String
        TransmissionType: String
        Fuel_Tank_Capacity: Int
        Fuel_Type: String
        Max_Power: String
        Seating_Capacity: Int
        Boot_Space: Int
        Body_Type: String
        features: [FeaturesInput]
    }

    input FeaturesInput{
        Power_Steering: Boolean
        Anti_Lock_Braking_System: Boolean
        Driver_Airbag: Boolean
        Passenger_Airbag: Boolean
        Automatic_Climate_Control: Boolean
        Alloy_Wheels: Boolean
        Multi_function_Steering_Wheel: Boolean
        Power_Windows_Front: Boolean
        Air_Conditioner: Boolean
    }

    type Mutation {
        createSpecifications(input: SpecificationsInput): Specifications
    }

`)

export default schema;

