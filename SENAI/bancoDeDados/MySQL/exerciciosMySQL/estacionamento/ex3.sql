SELECT veiculo.placa, estacionamento.horaEntrada, estacionamento.horaSaida FROM estacionamento
JOIN veiculo
ON estacionamento.veiculoId = veiculo.idVeiculo
WHERE veiculo.cor = 'azul';

SELECT estacionamento.nomeEstacionamento FROM estacionamento
JOIN veiculo
ON estacionamento.veiculoId = veiculo.idVeiculo
WHERE veiculo.placa = 'BBB-2222';

SELECT cliente.nomeCliente FROM veiculo
JOIN estacionamento
ON estacionamento.veiculoId - veiculo.idVeiculo
JOIN cliente
ON veiculo.clienteId = cliente.idCliente
WHERE idEstacionamento = 1;

SELECT categoria.nomeCategoria FROM veiculo
JOIN estacionamento
ON estacionamento.veiculoId - veiculo.idVeiculo
JOIN categoria
ON veiculo.categoriaId = categoria.idCategoria
WHERE idEstacionamento = 2;

SELECT cliente.nomeCliente, veiculo.placa, categoria.nomeCategoria FROM veiculo
JOIN cliente
ON veiculo.clienteId = cliente.idCliente
JOIN categoria
ON veiculo.categoriaId = categoria.idCategoria;

SELECT COUNT(veiculo.clienteId) FROM veiculo;

select * from veiculo