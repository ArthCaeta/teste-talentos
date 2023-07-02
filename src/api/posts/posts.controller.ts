import { Request, RequestHandler, Response } from "express";
import { Pool } from "mysql2/promise";
import * as PostService from "./posts.service";

/**
 * @param req Express Request
 * @param res Express Response
 */

export const getPOSTS =
  (pool: Pool): RequestHandler =>
  async (req: Request, res: Response) => {
    try {
      const result = await PostService.getPosts(pool);
      res.status(200).json(result);
    } catch (error) {
      console.error(
        "[posts.controller][getPosts][Error]",
        typeof error === "object" ? JSON.stringify(error) : error
      );
      res.status(500).json({
        message: "There was an error when fetching posts",
      });
    }
  };

export const getPOSTById =
  (pool: Pool): RequestHandler =>
  async (req: Request, res: Response) => {
    try {
      const result = await PostService.getPostById(pool, req.params.id);
      if (result.length === 0) {
        res.status(500).json({
          message: "This Id does not exist",
        });
      } else {
        res.status(200).json(result);
      }
    } catch (error) {
      console.error(
        "[posts.controller][getPostsById][Error]",
        typeof error === "object" ? JSON.stringify(error) : error
      );
    }
  };

export const updatePost =
  (pool: Pool): RequestHandler =>
  async (req: Request, res: Response) => {
    console.log(req.body);
    try {
      const result = await PostService.updatePost(
        pool,
        req.body,
        req.params.id
      );
      res.status(200).json(result);
    } catch (error) {
      console.error(
        "[posts.controller][updatePost][Error] ",
        typeof error === "object" ? JSON.stringify(error) : error
      );
      res.status(500).json({
        message: "There was an error when creating post",
      });
    }
  };

export const deletePOSTById =
  (pool: Pool): RequestHandler =>
  async (req: Request, res: Response) => {
    try {
      const result = await PostService.deletePostById(pool, req.params.id);
      res.status(200).json(result);
    } catch (error) {
      console.error(
        "[posts.controller][deletePosts][Error]",
        typeof error === "object" ? JSON.stringify(error) : error
      );
      res.status(500).json({
        message: "There was an error when fetching posts",
      });
    }
  };

export const createPOST =
  (pool: Pool): RequestHandler =>
  async (req: Request, res: Response) => {
    console.log(req.body);
    try {
      const result = await PostService.createPost(pool, req.body);
      res.status(200).json(result);
    } catch (error) {
      console.error(
        "[posts.controller][createPosts][Error] ",
        typeof error === "object" ? JSON.stringify(error) : error
      );
      res.status(500).json({
        message: "There was an error when creating post",
      });
    }
  };
