import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProduitsModule } from './produits/produits.module';
import { HistoricSearchModule } from './historic-search/historic-search.module';
@Module({
  // imports: [MongooseModule.forRoot('mongodb+srv://commerce:commerce@ecommerce-6qvze.mongodb.net/ecommerce?retryWrites=true&w=majority', {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }), UsersModule, AuthModule, ProduitsModule],
  imports: [MongooseModule.forRoot(process.env.MONGO_URI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }), UsersModule, AuthModule, ProduitsModule, HistoricSearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
