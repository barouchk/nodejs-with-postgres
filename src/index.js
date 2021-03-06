import express from 'express';
import bodyParser from 'body-parser';

import { createSchemas } from './config/postgres';
import middlewaresConfig from './config/middleware';;
import ApiRoutes from './controllers';

const app = express();

/**
 * MIDDLEWARES
 */

middlewaresConfig(app);

/**
 * API ROUTES
 */
app.use('/api', ApiRoutes);

/**
 * POSTGRES
 */

(async () => {
    await createSchemas();
})();


const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(`Server Running on port: ${PORT}`);
    }
});