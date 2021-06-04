import mongoose, { Schema, Document } from 'mongoose';

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

export default mongoose.model('customer', UserSchema);


export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
}