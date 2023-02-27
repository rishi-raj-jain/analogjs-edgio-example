import { Router } from "@edgio/core";

const router = new Router();

router.static("dist/server/public");

router.fallback(({ renderWithApp }) => {
  renderWithApp();
});

export default router;
