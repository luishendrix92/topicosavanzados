create database agencia_viajes;

use agencia_viajes;

create table clientes(
  noCte serial primary key,
  nomCte varchar(50),
  correo varchar (50),
  telefono varchar(15)
);

create table hotel(
  cveHotel serial primary key,
  nombHotel varchar(50),
  ubicacion varchar(50),
  clase varchar(15),
  telefono varchar(15)
);

create table autos(
  serie varchar(25) primary key,
  modelo varchar(20),
  marca varchar(20),
  ano int,
  precio money
);

create table aerolinea(
  cveAerolinea serial primary key,
  nombreAerolinea varchar(30)
);

create table boleto(
  noBoleto serial primary key,
  noVuelo int not null,
  tarifa money,
  noAsiento int,
  clase varchar(20),
  fechaExpedicion date,
  locReserva varchar(30),
  cveAerolinea foreign key (cveAerolinea) references aerolinea(cveAerolinea)
);

create table rAutos(
  idResAutos serial primary key,
  fechaExpedicion date,
  fechaEntrega date,
  costo money,
  serie varchar(25) foreign key (serie) references autos(serie)
);

create table rVuelos(
  noVuelo serial primary key,
  fecha date,
  lugarSalida varchar(50),
  lugarLlegada varchar(50),
  horaSalida time,
  horaLlegada time,
  duracion int,
  noBoleto int foreign key (noBoleto) references boleto(noBoleto)
);

create table rHotel(

);

SELECT * FROM rVuelos WHERE tabla = MiTabla;