import type { RequestHandler } from '@sveltejs/kit'

import { fetchGames } from '$lib/modules/novablitz'
import db from '$lib/db'

export const get: RequestHandler = () => {
	return new Promise((resolve, reject) => {
		db.find({}).exec((err, documents) => {
			if (err) reject(err)
			resolve({
				body: documents,
			})
		})
	})
}
