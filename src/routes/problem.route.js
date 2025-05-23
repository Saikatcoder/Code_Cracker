import express from 'express';
import { authMiddleware, checkAdmin } from '../middleware/auth.middleware.js';
import {
  createproblem,
  deleteProblem,
  getAllProblems,
  getAllProblemsSolvedByUser,
  getProblemById,
  updateProblem,
} from '../controller/problem.controller.js';

const problemRoute = express.Router();

problemRoute.post('/create-problem', authMiddleware, checkAdmin, createproblem);

problemRoute.get('/get-all-problems', authMiddleware, getAllProblems);

problemRoute.get('/get-problem/:id', authMiddleware, getProblemById);

problemRoute.put('/update-problem/:id',authMiddleware, checkAdmin,updateProblem );

problemRoute.delete('/delete-problem/:id',authMiddleware,checkAdmin,deleteProblem);

problemRoute.get('/get-solved-problems',authMiddleware,getAllProblemsSolvedByUser);

export default problemRoute;


