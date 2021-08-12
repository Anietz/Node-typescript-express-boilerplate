import mongoose, { Schema } from 'mongoose';


export interface IUser{
  email: string;
  firstName: string;
  lastName: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

export default mongoose.model<IUser>('customer', UserSchema);

