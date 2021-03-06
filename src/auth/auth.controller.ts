import { Body, Controller, Post, Request, Res, UseGuards, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { RefreshAccessTokenDto } from 'src/users/dto/refresh-access-token.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Request() req, @Body() loginUserDto: LoginUserDto) {
        const login = await this.authService.login(req, loginUserDto);
        return {
            code: 4000,
            message: "vous êtes maintenant connecté",
            value: [ login ]
        }
    }

    @Post('refreshAccessToken')
    async refreshAccessToken(@Request() req, @Body() refreshAccessTokenDto: RefreshAccessTokenDto) {
        const refreshToken = await this.authService.refreshAccessToken(req, refreshAccessTokenDto);
        await this.authService.delete(refreshAccessTokenDto);
        return {
            code: 4000,
            message: "token actualisé avec success",
            value: [ refreshToken ]
        }
    }

    @Post('deleteRefreshToken')
    async logout(@Body() refreshToken: string, userId: string, @Res() res){
        const deleteRefreshToken = await this.authService.logout(refreshToken,userId);
        res.send({
            code: 4000,
            message: "refreshToken supprimé",
            value: []
        });
        return deleteRefreshToken;
    }
}
