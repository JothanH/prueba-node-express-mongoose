
import { Schema, model, Document} from 'mongoose';


const testSchema = new Schema({

    nombre: {
        type: String,
    },
    cantidad: {
        type: Number,
    },
    activo: {
        type: Boolean
    }

});

interface ITest extends Document {
    nombre: string;
    cantidad: Number,
    activo: Boolean;
}

export const Test = model<ITest>('Test', testSchema);