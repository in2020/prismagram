import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Query: {
        searchUser: async (_, args) => prisma.users({
            where: {
                OR: [
                    {userName_contains: args.term},
                    {firstName_contains: args.term},
                    {lastName_contains: args.term},
                    {email_contains: args.term},
                ]
            }
        })
    }
}