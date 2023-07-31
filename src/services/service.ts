import IModel from "../models/model";
import { serviceInstance } from "./serviceInstance";

export const clientService = {
    async getClients(): Promise<IModel[]> {
        const response = await serviceInstance.get('/client');
        return response.data;
    },

    async getClient(id: string): Promise<IModel> {
        const response = await serviceInstance.get(`/client/${id}`);
        return response.data;
    },

    async createClient(client: IModel): Promise<IModel> {
        const response = await serviceInstance.post('/client', client);
        return response.data;
    },

    async updateClient(client: IModel): Promise<IModel> {
        const response = await serviceInstance.put(`/client/${client.id}`, client);
        return response.data;
    },

    async deleteClient(id: string): Promise<IModel> {
        const response = await serviceInstance.delete(`/client/${id}`);
        return response.data;
    }
};     