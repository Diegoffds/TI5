import { type FastifyInstance, type FastifyPluginOptions, type FastifyRequest, type FastifyReply } from "fastify"
import { createUsuarioController } from "./controllers/createUsuarioController.js"
import { deleteUsuarioController } from "./controllers/deleteUsuarioController.js"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) { //rota de teste para ver se o servidor esta rodando
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok : true}
    })

    fastify.post("/usuario", async (request: FastifyRequest, reply: FastifyReply) => { //rota para criar o usuario
        return new createUsuarioController().handle(request, reply) 
    })

    
    fastify.delete("/usuario", async (request: FastifyRequest, reply: FastifyReply) => { //rota para deletar o usuario
        return new deleteUsuarioController().handle(request, reply) 
    })
}