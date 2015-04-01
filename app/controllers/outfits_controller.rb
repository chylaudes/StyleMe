class OutfitsController < ApplicationController
  def index
    @outfits = Outfits.all
  end

  def create
    Outfit.create outfit_parms
    redirect_to
  end

  def new
    @outfit.new
  end

  def show
  end

  def destroy
  end

  private
  def outfit_params

  end
end
