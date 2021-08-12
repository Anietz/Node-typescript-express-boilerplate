import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './userModel';

export interface ICustomerMovies{
  name: string;
  customerId: IUser['_id'];
}

const customerMovieSchema: Schema = new Schema({
  name: { type: String, required: true },
  customerId: { type: Schema.Types.ObjectId, required: true }
});

export default mongoose.model<ICustomerMovies>('customerMovie', customerMovieSchema);