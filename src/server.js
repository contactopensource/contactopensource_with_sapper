import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import bodyParser from 'body-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import * as sapper from '@sapper/server';

const FileStore = sessionFileStore(session);
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
	.use(bodyParser.json())
	.use(session({
		secret: 'ee3fc1ccb46c91f543e364291a46c682', //TODO change this dev-only secret to a production env secret.
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 31536000 // 31536000 seconds ~= 1 year
		},
		store: new FileStore({
			path: process.env.NOW ? `/tmp/sessions` : `.sessions`
		})
	}))
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: req => ({
				user: req.session && req.session.user
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
