class StylesController < ApplicationController
  # before_action :authenticate_user!
  # skip_before_filter :verify_authenticity_token :only => [:create]
  # skip_before_action :verify_authenticity_token, only: [:create]

  def index
    # binding.pry
    @user = current_user
    # @outfit = Outfit.new 
  end

  def new
    # @user = User.find(params[:user_id])
    @outfit = Outfit.new    
  end

  # def create
  #   binding.pry
  #   @outfit = Outfit.new outfit_parms
  #   if @outfit.save 
  #     redirect_to style_path, notice: 'Success, your itinerary was created.'
  #   else
  #     # render outfits_index_path
  #     redirect_to outfits_index_path
  #   end    
  #   # Outfit.create outfit_parms
  #   # redirect_to outfits_index_path
  # end

  def show
    @user = current_user
  end

  def saved_style
  end



  def list
  end
end
