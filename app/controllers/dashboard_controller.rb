class DashboardController < ApplicationController
  before_filter :authenticate_user!
  respond_to :json

  def index
    if !params[:access_token].nil?
      flash[:success] = "Venmo successfully authenticated!"
    end
  end

  def confirm_payment
    head :ok
  end

  def make_payment_path
  	 
  		uri = URI.parse("https://api.venmo.com/v1/payments")
  		http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true
      http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  		request = Net::HTTP::Post.new(uri.request_uri)
  		request.set_form_data("access_token" => params[:access_token], "email" => params[:payment_target],
  		 "amount" => params[:payment_amount], "note" => params[:payment_note] )

  		response = http.request(request)

      if(response["status"] == "pending" || "settled")
      redirect_to({ action: 'index' }, alert: "Payment complete!")
      else
        redirect_to :back
      end

     	
  end

  helper_method :make_payment_path
  
end
