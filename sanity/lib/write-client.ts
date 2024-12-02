import "server-only"
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId ,token} from '../env'
if (!projectId || !dataset || !apiVersion || !token) {
  throw new Error("Sanity configuration is incomplete. Check your environment variables.");
}

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
    useCdn: false,//alway get a new data not caching 
  token,
})
if (!writeClient.config().token) {
    throw new Error("Write token not found.")
}