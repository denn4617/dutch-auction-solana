import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { WtiaAuction } from '../target/types/wtia_auction';

describe('wtia-auction', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.WtiaAuction as Program<WtiaAuction>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
