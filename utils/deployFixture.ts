import { ethers, deployments } from 'hardhat'
import { precision } from './precision'
import { BlankFarmer, CreationFactory, QuadraticCurve } from '../types'

export type Fixture = Awaited<ReturnType<typeof deployFixture>>

export async function deployFixture() {
  await deployments.fixture()
  const accountList = await ethers.getSigners()
  const { deployer } = await ethers.getNamedSigners()

  const [
    wallet,
    user0,
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    signer0,
    signer1,
    signer2,
    signer3,
    signer4,
    signer5,
    signer6,
    signer7,
    signer8,
    signer9,
  ] = accountList

  const factory = await ethers.getContract<CreationFactory>('CreationFactory')
  const quadraticCurve = await ethers.getContract<QuadraticCurve>('QuadraticCurve')
  const blankFarmer = await ethers.getContract<BlankFarmer>('BlankFarmer')

  const factoryAddress = await factory.getAddress()
  const blankFarmerAddress = await blankFarmer.getAddress()

  const accounts = {
    deployer,

    wallet,
    user0,
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    signer0,
    signer1,
    signer2,
    signer3,
    signer4,
    signer5,
    signer6,
    signer7,
    signer8,
    signer9,
    signers: [signer0, signer1, signer2, signer3, signer4, signer5, signer6],
  }

  return {
    accounts,
    ...accounts,
    factoryAddress,
    blankFarmer,
    blankFarmerAddress,
    quadraticCurve,
    factory,
  }
}