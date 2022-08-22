import { Router } from 'express';
import main from '../main';

const router = new Router();

router.get('/game/simulate', main.init);

export default router;
