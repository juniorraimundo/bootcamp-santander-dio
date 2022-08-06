package com.dio;

import com.dio.model.Gato;

public class Primeiro_Programa {

	public static void main(String[] args) {
		Gato gato = new Gato();
		Livros livros = new Livros();
		
		System.out.println(gato);
	}
}

class Livros {
	private String nome;
	private String npag;
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getNpag() {
		return npag;
	}
	public void setNpag(String npag) {
		this.npag = npag;
	}
}
