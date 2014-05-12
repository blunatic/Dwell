class DashboardController < ApplicationController
  before_filter :authenticate_user!
 
  def index
  	if !params[:access_token].nil?
  		flash[:success] = "Venmo successfully authenticated!"
  	end
  end

  def make_payment_path
  	if !params[:access_token].nil?

  		uri = URI.parse("https://api.venmo.com/v1/payments")
  		http = Net::HTTP.new(uri.host, uri.port)
  		request = Net::HTTP::Post.new(uri.request_uri)
  		request.set_form_data({"access_token" => params[:access_token], "email" => params[:payment_target],
  		 "amount" => params[:payment_amount], "note" => params[:payment_note]} )

  		response = http.request(request)
  	end
  end

  helper_method :make_payment_path
  
end
