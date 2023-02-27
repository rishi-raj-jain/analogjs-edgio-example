const { join } = require("path");
const { DeploymentBuilder } = require("@edgio/core/deploy");

module.exports = async () => {
  const builder = new DeploymentBuilder();
  builder.clearPreviousBuildOutput();
  await builder.exec("npm run build");
  builder.addJSAsset(join(process.cwd(), "dist", "server", "server"), "server");
  await builder.build();
};
