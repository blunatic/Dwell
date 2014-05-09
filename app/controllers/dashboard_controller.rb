class DashboardController < ApplicationController
  before_filter :authenticate_user!
 
  def index
  	if !params[:access_token].nil?
  		flash[:success] = "Venmo successfully authenticated!"
  	end
  end

  def make_payment
  	if !params[:access_token].nil?

  		form_data = {
  			"email" => @email_to,
  			"amount" => @amount_to,
  			"note" => @note_to,
  			"access_token" => :access_token
  		}
  		url = "https://api.venmo.com/v1/payments"
  		request = Net::HTTP::Post.new(url, form_data)
  		
  		response = http.request(request)
  		
  	end
  end

  helper_method :make_payment
  
end
