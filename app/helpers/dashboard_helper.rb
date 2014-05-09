module DashboardHelper
	def gravatar_for(user)
		gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
		gravatar_url = "http://secure.gravatar.com/avatar/#{gravatar_id}"
		image_tag(gravatar_url, alt: user.first_name, class: "img-circle")
	end

	def flash_class(level)
    case level
        when :notice then "alert alert-info"
        when :success then "alert alert-success"
        when :error then "alert alert-error"
        when :alert then "alert alert-error"
    end
end
end
