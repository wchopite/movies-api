import { Connection, createConnection } from 'typeorm';
import mysqlDbConnection from './mysqlDbConnection';

export default (): Promise<Connection> => createConnection(mysqlDbConnection);
