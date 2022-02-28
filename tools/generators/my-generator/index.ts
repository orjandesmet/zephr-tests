import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  console.log('hellow', schema.name);
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
