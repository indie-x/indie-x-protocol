import { DeployFunctionOptions, createDeployFunction } from '@utils/deploy'
import { precision } from '@utils/precision'

export const options: DeployFunctionOptions = {
  contractName: 'CreationFactory',
  dependencyNames: [],
  getDeployArgs({ dependencyContracts, namedAccounts }) {
    return [namedAccounts.deployer]
  },
}

export default createDeployFunction(options)
