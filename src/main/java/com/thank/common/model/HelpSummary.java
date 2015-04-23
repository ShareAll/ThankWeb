package com.thank.common.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Indexed;

@Entity("HelpSummary")
public class HelpSummary implements Serializable {
	private static final long serialVersionUID = 8452984685742656974L;
	//id is generated by yyyy-MM-dd-HH:mm:dd-ObjectID.HexString
	//2015-04-20-18:56:375535ae55300402dd9873e39e
	public @Id String id;
	public long categoryId;
	public @Indexed String owner;
	public String title;
	public int completeness=0;
	public Set<String> subscribers=new HashSet<String>();
	public int comments=0;
}
