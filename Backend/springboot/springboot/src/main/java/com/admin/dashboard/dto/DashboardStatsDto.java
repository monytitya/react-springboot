package com.admin.dashboard.dto;
public class DashboardStatsDto {
    private Long totalUsers;
    private Double totalRevenue;
    private Double conversionRate;
    private Long totalTransactions;
    public DashboardStatsDto(Long totalUsers, Double totalRevenue, Double conversionRate, Long totalTransactions) {
        this.totalUsers = totalUsers;
        this.totalRevenue = totalRevenue;
        this.conversionRate = conversionRate;
        this.totalTransactions = totalTransactions;
    }
    
    public Long getTotalUsers() { return totalUsers; }
    public void setTotalUsers(Long totalUsers) { this.totalUsers = totalUsers; }

    public Double getTotalRevenue() { return totalRevenue; }
    public void setTotalRevenue(Double totalRevenue) { this.totalRevenue = totalRevenue; }

    public Double getConversionRate() { return conversionRate; }
    public void setConversionRate(Double conversionRate) { this.conversionRate = conversionRate; }

    public Long getTotalTransactions() { return totalTransactions; }
    public void setTotalTransactions(Long totalTransactions) { this.totalTransactions = totalTransactions; }
}
