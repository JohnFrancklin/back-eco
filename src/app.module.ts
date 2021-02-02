import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProduitsModule } from './produits/produits.module';
import { HistoricSearchModule } from './historic-search/historic-search.module';
import { categorieModule} from './categorie/categorie.module';
import { CommandeModule } from './commande/commande.module';
import { PermissionModule } from './permission/permission.module';
@Module({
  // imports: [MongooseModule.forRoot('mongodb+srv://commerce:commerce@ecommerce-6qvze.mongodb.net/ecommerce?retryWrites=true&w=majority', {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }), UsersModule, AuthModule, ProduitsModule, HistoricSearchModule, categorieModule, CommandeModule],
  imports: [MongooseModule.forRoot(process.env.MONGO_URI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }), UsersModule, AuthModule, ProduitsModule, HistoricSearchModule, categorieModule, CommandeModule, PermissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
