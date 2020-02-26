package com.bosch.dee.onboarding.data;

public class PushData {
	private long userID;
	private long taskID;
	private String message;
	
	public PushData() {
		super();
	}
	
	public PushData(long userID, long taskID, String message) {
		super();
		this.userID = userID;
		this.taskID = taskID;
		this.message = message;
	}
	public Long getUserID() {
		return userID;
	}
	public void setUserID(long userID) {
		this.userID = userID;
	}
	public long getTaskID() {
		return taskID;
	}
	public void setTaskID(long taskID) {
		this.taskID = taskID;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
