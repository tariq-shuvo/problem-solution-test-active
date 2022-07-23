import { dotEnvPath } from './path/index';
import { config as dotenv } from 'dotenv'

dotenv({path: dotEnvPath()})

export default {
    cashIn: `${process.env.CASH_IN}`,
    cashOutNatural: `${process.env.CASH_OUT_NATURAL}`,
    cashOutJuridical: `${process.env.CASH_OUT_JURIDICAL}`,
    daysOfWeek: ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],
}