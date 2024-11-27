export default {
	async fetch(request, env, ctx) {
		return Response.json({
			message: 'Hello World!',
		});
	},
} satisfies ExportedHandler<Env>;
