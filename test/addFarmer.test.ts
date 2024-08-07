import { Fixture, deployFixture } from '@utils/deployFixture'
import { expect } from 'chai'
import { ZeroAddress } from 'ethers'
import { ethers } from 'hardhat'

describe('addFarmer', function () {
  let f: Fixture

  beforeEach(async () => {
    f = await deployFixture()
  })

  it('Can addFarmer', async () => {
    const farmerIndex = await f.indieX.farmerIndex()
    expect(farmerIndex).to.equal(1n)

    const tx = await f.indieX.connect(f.deployer).addFarmer(f.blankFarmerAddress)
    await tx.wait()

    const farmerIndexAfter = await f.indieX.farmerIndex()
    expect(farmerIndexAfter).to.equal(farmerIndex + 1n)
  })

  it('Only owner can addFarmer', async () => {
    const farmerIndex = await f.indieX.farmerIndex()
    expect(farmerIndex).to.equal(1n)

    await expect(f.indieX.connect(f.user0).addFarmer(f.blankFarmerAddress)).to.revertedWithCustomError(
      f.indieX,
      'OwnableUnauthorizedAccount',
    )

    const tx = await f.indieX.connect(f.deployer).addFarmer(f.blankFarmerAddress)
    await tx.wait()

    const farmerIndexAfter = await f.indieX.farmerIndex()
    expect(farmerIndexAfter).to.equal(farmerIndex + 1n)
  })
})
