import { GraphQLClient } from "graphql-request";
export declare class DsApiClient {
    client: GraphQLClient;
    constructor(url: string, token: string);
    demarche(idDemarche: number): Promise<{
        demarche: Partial<import("./@types/types").Demarche>;
    }>;
    dossier(idDossier: number): Promise<{
        dossier: Partial<import("./@types/types").Dossier>;
    }>;
    groupeInstructeur(idGroupeInstructeur: number): Promise<{
        groupeInstructeur: Partial<import("./@types/types").GroupeInstructeur>;
    }>;
}