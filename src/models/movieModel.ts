import mongoose, { Schema, Document } from 'mongoose';

const movieSchema: Schema = new Schema({
  title: { type: String, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

export default mongoose.model('movies', movieSchema);


export interface IMovie extends Document {
  email: string;
  firstName: string;
  lastName: string;
}