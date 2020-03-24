import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Mutation: {
        editUser: async (_, args, {request}) => {
            isAuthenticated(request);
            const {userName, email, firstName, lastName, bio} = args;
            const {user} = request;

            console.log(`userName: ${userName}`);
            try{
                await prisma.updateUser({
                    where: {
                        id: user.id
                    },
                    data: {
                        userName,
                        email,
                        firstName,
                        lastName,
                        bio,
                    }
                });
                return true;
            }catch (e) {
                return false;
            }
        },
    },
};