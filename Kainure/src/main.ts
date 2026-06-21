import { setupDatabase } from './data/setup.js';
import { OnPlayerConnect }    from './publics/OnPlayerConnect.js';
import { OnPlayerDisconnect } from './publics/OnPlayerDisconnect.js';
import { OnDialogResponse }   from './publics/OnDialogResponde.js';
import { CMD } from '../includes/commands.js'
import { cmdCarro } from './commands/car.js';
import { cmdMoney } from './commands/money.js';
Public('OnGameModeInit', '', async () => {
    await setupDatabase();
    Native.AddPlayerClass(0, 1717.3047, -1946.4878, 13.5591, 3.3777, 0, 0, 0, 0, 0, 0);
    console.log('[Kainure]: Servidor iniciado!');
    console.log("cdnakncbacvhsdcbjadshucbmskabcjidsbmc dkcjkdsnfm,ndsjabckmdsnckldshkjcbdsknckdsbjdsbackdasjkcbd");
    
    return 1;
});

Public('OnPlayerConnect',    'i',    OnPlayerConnect);
Public('OnPlayerDisconnect', 'ii',   OnPlayerDisconnect);
Public('OnDialogResponse',   'iiiis', OnDialogResponse);
CMD('cv',  cmdCarro)
CMD('pagardinheiro', cmdMoney)