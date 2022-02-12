const connection = require('../Cache/cache');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const cache = await connection('caches')
            .where('id', id)
            .select('name')
            .first();

        if (!cache) {
            return response.status(400).json({ error: 'No CACHE found with this ID'});
        }

        return response.json(cache);
    }
}