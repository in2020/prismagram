import {isAuthenticated} from '../../../middlewares';
import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Mutation: {
        deletePost: async (_, args, {request}) => {
            isAuthenticated(request)
            const {id} = args;

            try{
                await prisma.deletePost({id});
                return true;
            }catch (e) {
                return false;
            }
        }
    }
}