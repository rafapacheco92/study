@import pygame

pygame.init()

corFundo = (0, 0, 0)
corPersonagem = (255, 255, 255)
cor_bala = (255, 255, 255)
velocidade_bala = 5
tamanhoTela = (900, 500)
clock = pygame.time.Clock()
tela = pygame.display.set_mode(tamanhoTela)
pygame.display.set_caption("AIMLAB")

larguraAlvoDamage = 900
alturaAlvoDamage = 1
posicaoXDamage = 350
posicaoYDamage = 20

corPersonagem = (255, 255, 255)
x = 0
y = 460
width = 20
height = 40
vel = 5

vectorX = 0
vectUm = 0
vectDois = 0

# Define posição inicial do Alvo
posicaoX = 350
posicaoY = 20

# Define o tamanho do Alvo
larguraAlvo = 200
alturaAlvo = 20

# Largura Bullet
larguraBullet = 5
alturaBullet = 5

# Define o tamanho e posição do Alvo - Rect(left, top, width, height)
player = ''
Alvo = pygame.Rect(posicaoX, posicaoY, larguraAlvo, alturaAlvo)
AlvoDamage = pygame.Rect(posicaoXDamage, posicaoYDamage, larguraAlvoDamage, alturaAlvoDamage)
bullet = pygame.Rect(-100, -100, larguraBullet, alturaBullet)

#Define a cor do Alvo
AlvoCor = (255,255,255)

# Define a velocidade do Alvo 
AlvoVelocidade = 1
bulletVelocidade = 5

#Número de vidas
vidas = 3

#pontos
pontos = 0

# Define variável de jogo rodando para verdadeiro
gameRun = True

arial = pygame.font.SysFont('Arial', 15)

def escreveTexto(text, font, text_col, x, y):
    img = font.render (text, True, text_col)
    tela.blit(img, (x, y))

while gameRun:

    pygame.time.delay(1)

    for event in pygame.event.get():

        if event.type == pygame.QUIT:
            pygame.quit()
            
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                gameRun = False


    keys = pygame.key.get_pressed()
    
    if keys[pygame.K_SPACE]:
        spawnBullet = True
        if bullet.y < 0:
            bullet.y = 0
            bullet = pygame.draw.rect(tela, (255,255,255), (player.x + 8, player.y, larguraBullet, alturaBullet))
            bullet.y = bullet.y - 7

    if keys[pygame.K_LEFT]:
        x -= vel

    if keys[pygame.K_RIGHT]:
        x += vel

    if bullet.colliderect(Alvo):
        pontos += 1
        bullet = pygame.draw.rect(tela, (255,255,255), (-100, -100, larguraBullet, alturaBullet))
        bullet.y = bullet.y - 0

    if (bullet.y < 0 and bullet.y > -5):
        vidas -= 1


    Alvo.x = Alvo.x + AlvoVelocidade
    bullet.y = bullet.y - 7
    tela.fill(corFundo) 

    escreveTexto("VIDAS: "+ str(vidas), arial, (255, 255, 255), 0, 0)
    escreveTexto("PONTUAÇÃO: "+ str(pontos), arial, (255, 255, 255), 750, 0)

    if Alvo.x > 700:
        AlvoVelocidade = AlvoVelocidade * -1
        
    if Alvo.x < 1:
        AlvoVelocidade = AlvoVelocidade * -1 
     
    if pontos >= 5:
        if AlvoVelocidade < 0:
            AlvoVelocidade = -3
        elif AlvoVelocidade > 0:
            AlvoVelocidade = 3

    if pontos >= 10:
        if AlvoVelocidade < 0:
            AlvoVelocidade = -5
        elif AlvoVelocidade > 0:
            AlvoVelocidade = 5

    pygame.draw.rect(tela, AlvoCor, Alvo)
    pygame.draw.rect(tela, (255, 255, 255), bullet)
    player = pygame.draw.rect(tela, (255,255,255), (x, y, width, height))
    pygame.display.update()
    clock.tick(60)
    
pygame.quit()